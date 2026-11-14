---
uid: api.ad5f91c2fda12a238421dd8c9326f0a4a798f6d26ef3dc50179e3a6057b7d728
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativeBuildResult.Dispose"
source: xml
reviewed: 5eadbfe387294b906f52f6233c86e7c13b9e99ea6eba9651f86d38acd1dbeab6
title: "ProductNativeBuildResult.Dispose"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Releases products in reverse dependency order after all consumers have finished. Repeated disposal has no effect.

## Exceptions

**Exception `T:System.AggregateException`:** One or more reading owners failed to release after every owner was attempted.
