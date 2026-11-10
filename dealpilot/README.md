# DealPilot

Revenue copilot prototype for enterprise sales teams. It answers one question on
every screen: **which deals will actually close, and what has to happen first?**

This is a visual prototype. There is no backend, no build step and no npm
install — open `index.html` and it runs.

## Run it

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

(Opening `index.html` straight from the filesystem also works.)

## What's in it

| View | What it shows |
| --- | --- |
| **Pipeline** | Stage board with a health dial per deal, the gate each stage has to clear, and a table of deals where the rep's call and the model's call disagree. |
| **Deal** | One deal in full: health breakdown, MEDDPICC qualification, open risk signals with a recommended play, activity timeline, buying-group coverage. |
| **Forecast** | Quarter roll-up against quota (booked / commit / best case / all in), coverage ratio, stage-weighted pipeline, and close dates by month. |
| **Signals** | Every open risk across the pipeline, ranked by severity then deal size, each with the play DealPilot would run next. |

## How the health score works

Every number on screen is derived in `app.js` from the fixtures in `data.js` —
nothing is hardcoded, so editing a deal changes its score, its forecast
category and its position in the signals feed.

| Component | Max | Source |
| --- | --- | --- |
| Qualification | 45 | MEDDPICC pillars, scored 0–2 each |
| Engagement | 20 | Days since last contact |
| Buying group | 20 | Engaged contacts, plus economic-buyer access |
| Stage velocity | 15 | Days in stage against that stage's benchmark |
| Slip penalty | −6 / quarter | Quarters the close date has already moved |

Bands: **75+** on track, **50–74** watch, **under 50** at risk.

The model's forecast call is computed independently of the rep's call, which is
what makes the disagreement table on the Pipeline view useful.

## Files

```
index.html   standalone shell (full HTML document)
page.html    shell for publishing as a hosted artifact
styles.css   design tokens + layout; light and dark themes
data.js      sample pipeline: 9 deals, stages, MEDDPICC pillars
app.js       scoring, forecast model, views, routing
```

## Data

All deals, companies and people are invented for the prototype. Nothing here is
a real customer record.
