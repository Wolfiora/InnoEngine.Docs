---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b387cdd6ce272f4b8583e4679d7fd8f4e9475f4bc754eb8a3caf203173a21820
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.GetNativeBuildRoot(Inno.Build.Toolchains.NativeComponentDescriptor)
title: NativeBuildContext.GetNativeBuildRoot
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 8c6e6bea72fb39e76c41af44e869caa4d1388e76924c70f18a1de0b22f104bad
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `component`:** The explicit component descriptor whose recipe project owns native intermediates.

## Returns

The absolute project-local obj/native path, without creating the directory. During publication, the path also contains the operation's target and compatible workspace identity. A Windows producer receives a temporary junction to the same physical directory so SDK tools can use bounded paths.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The component owner is null.

**Exception `T:System.InvalidOperationException`:** The selected checkout does not contain the owning toolchain project.
