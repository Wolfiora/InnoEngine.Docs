---
uid: api.68c2e0b86e1fada476e3953b64e894758d76db90c3fa5e8c2d9f0a00b133247c
symbol: "engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostics.Clear(System.Guid,System.String)"
source: xml
reviewed: 6a8da85f482e4108eb22794b4d436b6e91045c7b9015f8c4aed122159e0e9fc9
title: "Diagnostics.Clear"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: source-clr
---

Clears one targeted diagnostic group owned by the calling type.

**Parameter `targetId`:** The stable identity of the asset, scene element, or other dynamic target.

**Parameter `group`:** The non-empty responsibility name scoped to the calling type and target.

**Exception `T:System.ArgumentException`:** Thrown when `targetId` is empty or `group` is empty.
