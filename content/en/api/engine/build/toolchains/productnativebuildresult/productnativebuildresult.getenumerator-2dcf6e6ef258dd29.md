---
uid: api.2dcf6e6ef258dd2902dd4b1caa28f3718f2ff098cac9874e30320441bb8a082a
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativeBuildResult.GetEnumerator"
source: xml
reviewed: 09e819fcd18a6776875ab215e9b7ffb0ee27167bfc0d18f9ae4bb3e701dcb605
title: "ProductNativeBuildResult.GetEnumerator"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Enumerates borrowed products in plan order without transferring their ownership.

**Returns:** An enumerator which must finish before this result is disposed.

**Exception `T:System.ObjectDisposedException`:** The result has already released its leases.
