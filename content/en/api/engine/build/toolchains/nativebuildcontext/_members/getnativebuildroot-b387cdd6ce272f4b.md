---
uid: api.b387cdd6ce272f4b8583e4679d7fd8f4e9475f4bc754eb8a3caf203173a21820
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.GetNativeBuildRoot(Inno.Build.Toolchains.NativeComponentDescriptor)"
source: xml
reviewed: 6d1c574429deda655ddcb3239babf932a2daeb9eacc1c4ca54434a629158fb5d
title: "GetNativeBuildRoot"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Resolves native intermediates under the owning toolchain project in this checkout.

**Parameter `component`:** The explicit component descriptor whose recipe project owns native intermediates.

**Returns:** The absolute project-local obj/native path, without creating the directory. During publication, the path also contains the operation's target and compatible workspace identity. A Windows producer receives a temporary junction to the same physical directory so SDK tools can use bounded paths.

**Exception `T:System.ArgumentNullException`:** The component owner is null.

**Exception `T:System.InvalidOperationException`:** The selected checkout does not contain the owning toolchain project.
