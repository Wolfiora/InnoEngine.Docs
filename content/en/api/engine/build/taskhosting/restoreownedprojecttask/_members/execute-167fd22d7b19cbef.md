---
uid: api.167fd22d7b19cbeff0d2845ccbc77b062b11f6ac02f0dfb7284b6ec9865bbc5f
symbol: "engine:Inno.Build.TaskHosting:M:Inno.Build.TaskHosting.RestoreOwnedProjectTask.Execute"
source: xml
reviewed: 08280d88c6c001512de66db11b8be70eeac040c800c4f9473c2e676c12d9dedb
title: "Execute"
kind: api
owners: [Inno.Build.TaskHosting]
apiSurface: source-clr
---

Waits outside the MSBuild node, then restores under exclusive cross-process write ownership.

**Returns:** True after every requested restore succeeds; false with a logged failure or cancellation.
