---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.af3438a7aa499b105549e8867581d09c35ac0f1fce050e7b8a99050e96c492ac
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativeBuildPlan.CreateDeploymentFiles(System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeBuildProduct})
title: ProductNativeBuildPlan.CreateDeploymentFiles
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 9b2c08723c5f056eec7ee8fafd4f161c2093e57c6db96b24bbe94360870c6244
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `products`:** The complete result of this plan, in declaration order.

## Returns

Owned immutable relative-output to source-file mappings for atomic deployment.

## Exceptions

**Exception `T:System.ArgumentException`:** Products differ from the plan or deployment paths collide or escape their root.
