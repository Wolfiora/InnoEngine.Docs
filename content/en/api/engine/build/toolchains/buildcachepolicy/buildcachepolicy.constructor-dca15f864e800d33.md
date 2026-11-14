---
uid: api.dca15f864e800d33e71c03269bc6eb60d41292c4d3b32c0809326d0bda13e19c
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePolicy.#ctor(System.Int64,System.Int64,System.Nullable{System.TimeSpan})"
source: xml
reviewed: f36b0e542bdb6f16feefd49b2f77488567995fdf1bdb1233e82925b0ba6c690c
title: "BuildCachePolicy.Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Creates an immutable cache budget and automatic retirement time limit.

**Parameter `maximumBytes`:** The managed cache budget; defaults to 64 GiB.

**Parameter `minimumFreeBytes`:** The free-space threshold on the checkout volume; defaults to 20 GiB.

**Parameter `timeBudget`:** The retirement duration, or null for the five-second default.

**Exception `T:System.ArgumentOutOfRangeException`:** A budget is negative or the time limit is not positive.
