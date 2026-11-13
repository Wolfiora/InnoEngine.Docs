---
uid: api.cc1efdac8b019cdc4da31c2a481c48a675026841ad647bd5091fb40f6da81f14
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativeBuildPlan.#ctor(System.String,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.ProductNativeBuildStep},Inno.Build.Toolchains.NativeDeploymentMetadataFactory)"
source: xml
reviewed: e0216976ed85888451e0df251ec3af028476a0829352b76b3879d6580e15f20d
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Validates the complete ordered component graph before tools or staging can start.

**Parameter `productId`:** The product identity whose native closure is selected.

**Parameter `steps`:** Unique, dependency-ordered component operations.

**Parameter `deploymentMetadata`:** Optional product-owned metadata preparation, without backend discovery.

**Exception `T:System.ArgumentException`:** The product, component identity or dependency ordering is invalid.

**Exception `T:System.ArgumentNullException`:** The step collection is null.
