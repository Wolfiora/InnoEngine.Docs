---
uid: api.8f618c29b64e42c4629a38ad6b86fbf64fa3beafda69ea3a07aca2945dd36b36
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeToolchainSelection.ResolveExecutable(System.String)"
source: xml
reviewed: 9b8550fc5075ab9ef0c2f89e8a66c2a8fddc4abeeec7cf5ba8f5022a74ed8915
title: "ResolveExecutable"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Resolves an executable from the frozen selection rather than a mutable process PATH.

**Parameter `name`:** The explicit command registered by the platform provider.

**Returns:** The selected executable; an absent command fails immediately.

**Exception `T:System.InvalidOperationException`:** The provider did not register the requested command.
