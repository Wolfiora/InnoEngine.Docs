---
uid: api.d5fcd4c91b69912406868df4daf585c73404f1092ff6fdc6b0b05f9875f7d845
symbol: "engine:Inno.Build.TaskHosting:P:Inno.Build.TaskHosting.BuildTaskRuntimeTask.Properties"
source: xml
reviewed: 1ff836d459ba5d2276ebed54ae1233b8ce60467726bf2c42a4ab4b4303afbc52
title: "Properties"
kind: api
owners: [Inno.Build.TaskHosting]
apiSurface: source-clr
---

Gets or sets explicit name=value properties after product-specific global properties are removed. Explicit values override removal of inherited properties with the same name. ArtifactsPath is owned by this task and cannot be overridden. Restore excludes package imports; compilation includes the restored imports in a distinct evaluation.
