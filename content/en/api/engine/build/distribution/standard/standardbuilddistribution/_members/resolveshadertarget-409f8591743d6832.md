---
uid: api.409f8591743d6832d9ad6dadb5d7c17630587c089116ed94c4c7658e115f2dc2
symbol: "engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildDistribution.ResolveShaderTarget(Inno.Build.BuildTargetId)"
source: xml
reviewed: 3462ca5d2d927a0f265dbd70a9db5098b412bf84f4d74a86c30cd3b8c738e936
title: "ResolveShaderTarget"
kind: api
owners: [Inno.Build.Distribution.Standard]
apiSurface: source-clr
---

Resolves explicitly registered shader configuration independently of tool execution target.

**Parameter `target`:** The artifact's actual publication target.

**Returns:** The borrowed immutable configuration; unavailable targets fail before native preparation.

**Exception `T:System.NotSupportedException`:** The distribution has no shader configuration for this target.
