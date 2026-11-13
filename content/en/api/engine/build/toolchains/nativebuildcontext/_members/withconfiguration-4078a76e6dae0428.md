---
uid: api.4078a76e6dae04288fc6020ad2c3bb1dcd3612fcbef69d649aec9180db4d40bb
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.WithConfiguration(System.String)"
source: xml
reviewed: 68fbe6260e8f1c071d83476b6bd4eb2ddad7ceb26a4ce9e550a81e7d7065c793
title: "WithConfiguration"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Selects an explicit component configuration while borrowing this operation's frozen SDK and input state.

**Parameter `configuration`:** The debug or release configuration owned by the product step.

**Returns:** A derived context with no inherited workspace or artifact identity from another configuration.

**Exception `T:System.ArgumentException`:** The requested configuration is unsupported.
