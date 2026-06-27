# GitHub-readme-stats rank math for `badnikhil` — and the road to S

> Local-only working notes. Do NOT commit. Generated 2026-06-14.
> Source of truth: `anuraghazra/github-readme-stats` → `src/calculateRank.js` (master).

---

## 1. The CURRENT algorithm (verbatim)

### CDF functions
```js
function exponential_cdf(x) { return 1 - 2 ** -x; }   // commits, prs, issues, reviews
function log_normal_cdf(x)  { return x / (1 + x); }   // stars, followers (approximation)
```

### Weights, medians, and CDF used

| Metric    | Weight | Median (`all_commits=true`) | CDF used          |
|-----------|:------:|:---------------------------:|-------------------|
| commits   | **2**  | **1000** (250 if `all_commits=false`) | exponential_cdf |
| prs       | **3**  | 50                          | exponential_cdf   |
| issues    | **1**  | 25                          | exponential_cdf   |
| reviews   | **1**  | 2                           | exponential_cdf   |
| stars     | **4**  | 50                          | **log_normal_cdf**|
| followers | **1**  | 10                          | **log_normal_cdf**|

`TOTAL_WEIGHT = 2+3+1+1+4+1 = 12`. (The `repos` parameter is accepted but **unused**.)

### Thresholds and levels (verbatim)
```js
const THRESHOLDS = [1, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100];
const LEVELS     = ["S", "A+", "A", "A-", "B+", "B", "B-", "C+", "C"];
```

### Rank formula
```js
rank = 1 - (
    2 * exp_cdf(commits/1000) +
    3 * exp_cdf(prs/50)       +
    1 * exp_cdf(issues/25)    +
    1 * exp_cdf(reviews/2)    +
    4 * logn_cdf(stars/50)    +
    1 * logn_cdf(followers/10)
) / 12;
percentile = rank * 100;
level = LEVELS[ THRESHOLDS.findIndex(t => percentile <= t) ];
```

### Highest level — stated plainly
**The highest level is `S`. There is NO `A++`.** The ordered ladder, best→worst, is:
**S → A+ → A → A- → B+ → B → B- → C+ → C.**
`S` is the top tier: `percentile <= 1` (top ~1%). The rank immediately **above** `A+` is **`S`** — nothing sits between them.

---

## 2. `badnikhil`'s REAL stats (the inputs the card consumes)

Fetched 2026-06-14. Cross-checked against the live GRS card
(`https://github-readme-stats.vercel.app/api?username=badnikhil&include_all_commits=true&show=reviews`).

| Input              | Value | Source |
|--------------------|:-----:|--------|
| followers          | **50**  | `GET /users/badnikhil` |
| public repos       | 46    | `GET /users/badnikhil` (unused by algo) |
| total stars earned | **34**  | sum `stargazers_count` over `/users/badnikhil/repos` (46 repos; 8 are forks). Non-fork stars = 33; total incl. forks = 34. Matches live card "34". |
| all-time commits   | **477** | `search/commits?q=author:badnikhil` (cloak preview) `total_count` = 477. Matches live card "Total Commits 477" with `include_all_commits=true`. |
| total PRs          | **53**  | `search/issues?q=author:badnikhil+type:pr` `total_count` = 53 (35 merged). Matches card. |
| total issues       | **24**  | `search/issues?q=author:badnikhil+type:issue` `total_count` = 24. Card shows 24. |
| reviews            | **0**   | live card "Total PRs Reviewed: 0". Not available unauthenticated, but the card itself reports 0. |

Top-starred repos: `silicon-to-assembly` (11), `MyOS` (8), `file_organizer` (5), `bindbc-cuda` (4), `CAMM` (2), then a tail of 1-star repos.

No values are guessed — every input matches the live rendered card exactly.

---

## 3. Plugging in the real stats — actual computed rank

Per-metric weighted CDF contributions (weighted sum out of 12):

| Metric    | x = value/median | CDF(x)  | × weight | contribution |
|-----------|:----------------:|:-------:|:--------:|:------------:|
| commits   | 477/1000 = 0.477 | 0.2815  | ×2       | 0.5631 |
| prs       | 53/50 = 1.06     | 0.5204  | ×3       | 1.5611 |
| issues    | 24/25 = 0.96     | 0.4859  | ×1       | 0.4859 |
| reviews   | 0/2 = 0          | 0.0000  | ×1       | 0.0000 |
| stars     | 34/50 = 0.68     | 0.4048  | ×4       | 1.6190 |
| followers | 50/10 = 5.0      | 0.8333  | ×1       | 0.8333 |
| **sum**   |                  |         |          | **5.0625** |

```
rank       = 1 - 5.0625 / 12 = 1 - 0.42188 = 0.57813
percentile = 57.81
```
`57.81 <= 62.5` (and `> 50`) → **level = `B`**.

### ⚠️ Reality check vs the task's assumption
The task brief expected "around A+". **That is wrong for the current data.** With the real, live-card-verified inputs, `badnikhil` is at **B (percentile ≈ 57.81)**, two full bands below A+. The biggest drags are `reviews = 0` (zero contribution) and modest `commits`/`stars`. The live card itself renders **rank B**, confirming the computation.

---

## 4. Distance to S — per-metric sensitivity analysis

S requires `percentile <= 1`, i.e. weighted sum `>= 11.88` out of a **maximum possible 12**.
Currently the weighted sum is **5.0625**, so **~6.82 of 12 must be recovered**.

### Hard structural fact: every CDF saturates at 1.0, so each metric's contribution is CAPPED at its weight.
The maximum each lever can ever add (CDF → 1):

| Metric  | weight | max contribution | currently | head-room |
|---------|:------:|:----------------:|:---------:|:---------:|
| stars   | 4 | 4.000 | 1.619 | **2.381** |
| prs     | 3 | 3.000 | 1.561 | 1.439 |
| commits | 2 | 2.000 | 0.563 | 1.437 |
| reviews | 1 | 1.000 | 0.000 | **1.000** |
| issues  | 1 | 1.000 | 0.486 | 0.514 |
| followers|1 | 1.000 | 0.833 | 0.167 |

**Consequence: NO single metric can reach S, A+, or even A by itself.** Maxing any one lever to infinity:

| Lever → ∞       | best percentile reachable | best level |
|-----------------|:-------------------------:|:----------:|
| stars → ∞       | 37.97 | B+ |
| prs → ∞         | 45.82 | B+ |
| commits → ∞     | 45.84 | B+ |
| reviews → ∞     | 49.48 | B+ |
| ALL → ∞         | 0.00  | **S** |

So **S is only reachable by lifting several metrics together.** Stars (weight 4) is the single biggest lever, but stars alone caps out at B+.

### What each single lever CAN do (others held at current values)

Minimum value of one metric to cross each band (others fixed):

| Target band (≤pct) | via stars | via prs | via commits |
|--------------------|:---------:|:-------:|:-----------:|
| B+ (≤ 50)          | **89 stars** (+55) | 129 PRs (+76) | 2,002 commits (+1,525) |
| A- (≤ 37.5)        | unreachable alone | unreachable alone | unreachable alone |
| A  (≤ 25)          | unreachable alone | unreachable alone | unreachable alone |
| A+ (≤ 12.5)        | unreachable alone | unreachable alone | unreachable alone |
| S  (≤ 1)           | unreachable alone | unreachable alone | unreachable alone |

Cheap immediate win: just setting **reviews from 0 → 2** (the median) moves 53.6→ and **reviews 0 → 10** already gets to **B+ (49.74)** with zero other changes.

### Realistic COMBINED paths to S (need weighted sum ≥ ~11.88)

| Scenario | commits | prs | issues | reviews | stars | followers | percentile | level |
|----------|:-------:|:---:|:------:|:-------:|:-----:|:---------:|:----------:|:-----:|
| Just misses S | 5,000 | 250 | 125 | 50 | 1,500 | 320 | 2.89 | A+ |
| Borderline S  | 6,000 | 300 | 150 | 100 | 2,000 | 400 | 1.80 | A+ |
| **Hits S**    | 8,000 | 400 | 200 | 200 | 3,000 | 600 | **0.88** | **S** |

---

## 5. Actionable summary

**You are currently at `B` (percentile ≈ 57.81)** — note this is below the brief's assumed A+; the live card confirms B.

- **First, free wins (no projects needed):**
  - Set `reviews` 0 → 10 by reviewing PRs ⇒ instantly **B+** (49.74).
- **To climb bands, the cheapest single lever is STARS (weight 4):**
  - **+55 stars (34 → 89)** ⇒ crosses into **B+** on its own.
  - Stars alone *cannot* reach A- or above — the log-normal CDF saturates (stars→∞ caps at B+, pct 37.97).
- **To hit `S` you need `percentile <= 1`, which requires lifting ~6.8 of 12 weighted points — effectively maxing ALL metrics together.** No single lever suffices. A concrete S-reaching target:
  - **~3,000 total stars**, **~400 PRs**, **~8,000 all-time commits**, **~200 reviews**, ~200 issues, ~600 followers ⇒ pct ≈ 0.88 = **S**.
  - Emphasize stars (biggest weight, biggest current head-room of 2.381): going 34 → ~1,500–3,000 stars contributes the most, but must be paired with big gains in PRs, commits, and reviews.

**One-liner:** *"You're at B (~57.8 pct), not A+. Cheapest move up: +55 stars → B+, or set reviews 0→10 → B+. S (pct ≤ 1) is unreachable by any one metric because each CDF caps at its weight — it needs all levers maxed simultaneously: roughly 3k stars + 400 PRs + 8k commits + 200 reviews."*
