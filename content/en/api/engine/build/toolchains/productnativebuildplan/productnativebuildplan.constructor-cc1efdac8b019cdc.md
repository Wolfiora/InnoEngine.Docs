---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cc1efdac8b019cdc4da31c2a481c48a675026841ad647bd5091fb40f6da81f14
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativeBuildPlan.#ctor(System.String,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.ProductNativeBuildStep},Inno.Build.Toolchains.NativeDeploymentMetadataFactory)
title: ProductNativeBuildPlan.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 55e3cdefa64a0121e07c6d4833e49ea93e5f731071543e18f5dd96c9efe5ba7a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `productID`:** The product identity whose native closure is selected.

**Parameter `steps`:** Unique, dependency-ordered component operations.

**Parameter `deploymentMetadata`:** Optional product-owned metadata preparation, without backend discovery.

## Exceptions

**Exception `T:System.ArgumentException`:** The product, component identity or dependency ordering is invalid.

**Exception `T:System.ArgumentNullException`:** The step collection is null.
