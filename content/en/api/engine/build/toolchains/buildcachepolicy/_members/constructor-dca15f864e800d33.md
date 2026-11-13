---
uid: api.dca15f864e800d33e71c03269bc6eb60d41292c4d3b32c0809326d0bda13e19c
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePolicy.#ctor(System.Int64,System.Int64,System.Nullable{System.TimeSpan})"
source: xml
reviewed: 45452551e34e016adde7a3da5e1ecfd61a964185f7bcf4388b066ef243a95e36
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Creates an immutable cache budget and automatic retirement time limit.

**Parameter `maximumBytes`:** The managed cache budget; defaults to 64 GiB.

**Parameter `minimumFreeBytes`:** The free-space threshold on the checkout volume; defaults to 20 GiB.

**Parameter `timeBudget`:** The retirement duration, or null for the five-second default.

**Exception `T:System.ArgumentOutOfRangeException`:** A budget is negative or the time limit is not positive.
