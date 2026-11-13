---
uid: api.7e9f15d928e22eea39f295b6c1744f1a4317461320c62e8aad17b0099504a1d4
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.BeginInputVerification(System.String)"
source: xml
reviewed: 6b05dafc237f8caf35d4f78aa5dbb660586b53c2043d98572f86bebf5884ebd6
title: "BeginInputVerification"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Starts a fresh verification phase whose reads can be shared only within this derived context.

**Parameter `phase`:** The operation phase recorded in statistics, such as binding-locks or binding-generation.

**Returns:** A context with a new input inventory and hash cache; existing scopes are unchanged.

## Remarks

Create another phase after each independent ownership wait, generation or compilation.
