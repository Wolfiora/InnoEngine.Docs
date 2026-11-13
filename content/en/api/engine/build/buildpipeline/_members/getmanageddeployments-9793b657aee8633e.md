---
uid: api.9793b657aee8633e366d28f87aec2ebbd8345a1faafd3184c0f9bddbfc956c09
symbol: "engine:Inno.Build:M:Inno.Build.BuildPipeline.GetManagedDeployments(Inno.Build.BuildTargetId)"
source: xml
reviewed: 63e5cd5046430d6d6db7e961f5e7ef9ee22cd4d851ac9ac56df2e94dc5dc11f9
title: "GetManagedDeployments"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Gets the managed deployment choices supported by a registered publication platform.

**Parameter `target`:** The registered publication target whose managed runtime requirements are queried.

**Returns:** Immutable deployment identities in stable order; an unknown target throws explicitly.

**Exception `T:System.ArgumentException`:** The publication target is not registered in this build composition.
