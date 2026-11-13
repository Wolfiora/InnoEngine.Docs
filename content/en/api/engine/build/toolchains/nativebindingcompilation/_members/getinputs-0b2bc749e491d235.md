---
uid: api.0b2bc749e491d235dbc8f3f91388dd804b3124807e79907e5579f01f89bb0391
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingCompilation.GetInputs(System.String,System.String)"
source: xml
reviewed: ca267b50e400505a2920db63da14bd6577b0c9baf639a532859fa3dec2b07690
title: "GetInputs"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Enumerates exact file declarations for standalone or aggregate recipe fingerprinting.

**Parameter `engineRoot`:** The current checkout's absolute root.

**Parameter `nativeDirectory`:** The selected native artifact directory.

**Returns:** All generated, user and SDK inputs with their current physical locations.
