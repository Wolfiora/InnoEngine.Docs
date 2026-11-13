---
uid: api.89cd04e06b9aaf1cf269a9c7d0828b62260e94ee623d76d9cee521064f29007d
symbol: "engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.RuntimeFrame.#ctor(System.Int64,System.Single,System.Single,System.Single,System.Single,System.Single,System.Boolean)"
source: xml
reviewed: 42ea24691e3062980e82f70ab25842e7c15439e12021ecce267032b3ecf150fc
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
