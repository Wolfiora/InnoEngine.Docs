---
uid: api.167fd22d7b19cbeff0d2845ccbc77b062b11f6ac02f0dfb7284b6ec9865bbc5f
symbol: "engine:Inno.Build.TaskHosting:M:Inno.Build.TaskHosting.RestoreOwnedProjectTask.Execute"
source: xml
reviewed: 4150e401c614a5c8b3780ff4f6e2b2474c00f6061eac101826a81c27203907b6
title: "RestoreOwnedProjectTask.Execute"
kind: api
owners: [Inno.Build.TaskHosting]
apiSurface: source-clr
---

Waits outside the MSBuild node, then restores under exclusive cross-process write ownership.

## Returns

True after every requested restore succeeds; false with a logged failure or cancellation.
