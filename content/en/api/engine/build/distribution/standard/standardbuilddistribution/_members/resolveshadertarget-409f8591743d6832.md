---
uid: api.409f8591743d6832d9ad6dadb5d7c17630587c089116ed94c4c7658e115f2dc2
symbol: "engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildDistribution.ResolveShaderTarget(Inno.Build.BuildTargetId)"
source: xml
reviewed: 6a3b7cf3b13184ba93dcbe053a0502a9f1813c492e7e7ed80118377045a1691e
title: "ResolveShaderTarget"
kind: api
owners: [Inno.Build.Distribution.Standard]
apiSurface: source-clr
---

Resolves explicitly registered shader configuration independently of tool execution target.

**Parameter `target`:** The artifact's actual publication target.

**Returns:** The borrowed immutable configuration; unavailable targets fail before native preparation.

**Exception `T:System.NotSupportedException`:** The distribution has no shader configuration for this target.
