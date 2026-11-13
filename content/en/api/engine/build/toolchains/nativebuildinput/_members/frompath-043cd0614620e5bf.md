---
uid: api.043cd0614620e5bf17f9b619688dc75e0aec65a92b47c40a13477a619645b6e2
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildInput.FromPath(System.String,System.String)"
source: xml
reviewed: 1ad51ffdae9c5704bd5e758f8a3a1715cdfa16b4ed0adf2ed4862ff4c3b5f2e7
title: "FromPath"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Declares a checkout-relative input, or an external SDK location whose path affects tool selection.

**Parameter `engineRoot`:** The absolute checkout root assigned the logical prefix `engine/`.

**Parameter `path`:** A checkout-relative input or an absolute SDK input.

**Returns:** A normalized declaration preserving external SDK location identity.
