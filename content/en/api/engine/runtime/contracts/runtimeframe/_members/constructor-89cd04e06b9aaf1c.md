---
uid: api.89cd04e06b9aaf1cf269a9c7d0828b62260e94ee623d76d9cee521064f29007d
symbol: "engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.RuntimeFrame.#ctor(System.Int64,System.Single,System.Single,System.Single,System.Single,System.Single,System.Boolean)"
source: xml
reviewed: 5b3e7bda0f69217eb00908b396a851dfe5aa0b5053771bbf835fd3985f52df1b
title: "Constructor"
kind: api
owners: [Inno.Runtime.Contracts]
apiSurface: source-clr
---

Creates the immutable timing snapshot for one variable frame.

**Parameter `frameIndex`:** The monotonically increasing owner frame index.

**Parameter `time`:** Accumulated scaled time.

**Parameter `unscaledTime`:** Accumulated unscaled time.

**Parameter `deltaTime`:** Scaled interval.

**Parameter `unscaledDeltaTime`:** Unscaled interval.

**Parameter `timeScale`:** Simulation multiplier.

**Parameter `isPaused`:** Whether scaled simulation is paused.
