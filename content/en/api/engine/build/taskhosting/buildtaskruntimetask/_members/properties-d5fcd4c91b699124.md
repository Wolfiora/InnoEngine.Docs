---
uid: api.d5fcd4c91b69912406868df4daf585c73404f1092ff6fdc6b0b05f9875f7d845
symbol: "engine:Inno.Build.TaskHosting:P:Inno.Build.TaskHosting.BuildTaskRuntimeTask.Properties"
source: xml
reviewed: df1ce034200e479391638955401fb9904debeae6f6ab59b305ea3329c8ae4358
title: "Properties"
kind: api
owners: [Inno.Build.TaskHosting]
apiSurface: source-clr
---

Gets or sets explicit name=value properties after product-specific global properties are removed. Explicit values override removal of inherited properties with the same name. ArtifactsPath is owned by this task and cannot be overridden. Restore excludes package imports; compilation includes the restored imports in a distinct evaluation.
