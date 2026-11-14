---
uid: api.0b2bc749e491d235dbc8f3f91388dd804b3124807e79907e5579f01f89bb0391
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingCompilation.GetInputs(System.String,System.String)"
source: xml
reviewed: 4bfa650a5a92687423ba7f06b7022440ce8af56c1dae3eb05d3cdd691b2e69fc
title: "NativeBindingCompilation.GetInputs"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Enumerates exact file declarations for standalone or aggregate recipe fingerprinting.

**Parameter `engineRoot`:** The current checkout's absolute root.

**Parameter `nativeDirectory`:** The selected native artifact directory.

**Returns:** All generated, user and SDK inputs with their current physical locations.
