---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cc1efdac8b019cdc4da31c2a481c48a675026841ad647bd5091fb40f6da81f14
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativeBuildPlan.#ctor(System.String,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.ProductNativeBuildStep},Inno.Build.Toolchains.NativeDeploymentMetadataFactory)
title: ProductNativeBuildPlan.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 6f5abff2340955178fc9fb3eb7515a42f76ebe8e38bb86b49e71e7af9f2f3e54
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `productId`:** The product identity whose native closure is selected.

**Parameter `steps`:** Unique, dependency-ordered component operations.

**Parameter `deploymentMetadata`:** Optional product-owned metadata preparation, without backend discovery.

## Exceptions

**Exception `T:System.ArgumentException`:** The product, component identity or dependency ordering is invalid.

**Exception `T:System.ArgumentNullException`:** The step collection is null.
