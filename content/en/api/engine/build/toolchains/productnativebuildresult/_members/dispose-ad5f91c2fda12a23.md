---
uid: api.ad5f91c2fda12a238421dd8c9326f0a4a798f6d26ef3dc50179e3a6057b7d728
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativeBuildResult.Dispose"
source: xml
reviewed: 738f381b3638d886d649b9f536c47c0d0c644cce865a0a7b8eabccfbd46e0a3e
title: "Dispose"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Releases products in reverse dependency order after all consumers have finished. Repeated disposal has no effect.

**Exception `T:System.AggregateException`:** One or more reading owners failed to release after every owner was attempted.
