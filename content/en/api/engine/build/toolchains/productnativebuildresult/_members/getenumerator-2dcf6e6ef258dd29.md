---
uid: api.2dcf6e6ef258dd2902dd4b1caa28f3718f2ff098cac9874e30320441bb8a082a
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativeBuildResult.GetEnumerator"
source: xml
reviewed: 3e3ebb04566cf40d6f02fa78a0ad73de93d0eb6b433e93f60a7537a5b39152b2
title: "GetEnumerator"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Enumerates borrowed products in plan order without transferring their ownership.

**Returns:** An enumerator which must finish before this result is disposed.

**Exception `T:System.ObjectDisposedException`:** The result has already released its leases.
