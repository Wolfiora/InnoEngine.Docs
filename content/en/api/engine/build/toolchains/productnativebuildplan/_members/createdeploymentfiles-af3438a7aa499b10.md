---
uid: api.af3438a7aa499b105549e8867581d09c35ac0f1fce050e7b8a99050e96c492ac
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativeBuildPlan.CreateDeploymentFiles(System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeBuildProduct})"
source: xml
reviewed: cab2c2d228231ddb1b0022de2eacc95c921744cd48cc8ff761e47e04567802cd
title: "CreateDeploymentFiles"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Resolves exact deployment paths from the declared layout rather than component-name conventions.

**Parameter `products`:** The complete result of this plan, in declaration order.

**Returns:** Owned immutable relative-output to source-file mappings for atomic deployment.

**Exception `T:System.ArgumentException`:** Products differ from the plan or deployment paths collide or escape their root.
