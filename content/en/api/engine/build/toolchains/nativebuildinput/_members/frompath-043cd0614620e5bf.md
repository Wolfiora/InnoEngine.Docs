---
uid: api.043cd0614620e5bf17f9b619688dc75e0aec65a92b47c40a13477a619645b6e2
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildInput.FromPath(System.String,System.String)"
source: xml
reviewed: 2bd483b482232a6af86cddd37d2d69a67aa6fc2432dc3d18ac2709b60f09dce1
title: "FromPath"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Declares a checkout-relative input, or an external SDK location whose path affects tool selection.

**Parameter `engineRoot`:** The absolute checkout root assigned the logical prefix `engine/`.

**Parameter `path`:** A checkout-relative input or an absolute SDK input.

**Returns:** A normalized declaration preserving external SDK location identity.
