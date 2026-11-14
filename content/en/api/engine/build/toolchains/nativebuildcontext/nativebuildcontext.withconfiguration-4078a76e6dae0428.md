---
uid: api.4078a76e6dae04288fc6020ad2c3bb1dcd3612fcbef69d649aec9180db4d40bb
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.WithConfiguration(System.String)"
source: xml
reviewed: 044ce8f37595a14aae1d76c72a4c60c96e4512c44df2214574bfad35c3241979
title: "NativeBuildContext.WithConfiguration"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Selects an explicit component configuration while borrowing this operation's frozen SDK and input state.

**Parameter `configuration`:** The debug or release configuration owned by the product step.

**Returns:** A derived context with no inherited workspace or artifact identity from another configuration.

**Exception `T:System.ArgumentException`:** The requested configuration is unsupported.
