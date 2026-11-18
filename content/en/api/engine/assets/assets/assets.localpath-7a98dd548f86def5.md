---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7a98dd548f86def58b46c981efc7d696e52851128e0978ddcad3cbf2ea841857
symbol: engine:Inno.Assets:M:Inno.Assets.Assets.LocalPath(System.String,System.String)
title: Assets.LocalPath
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: b4e0210d173f7bb3310b0bff29ee851b1a066f2ccf84f4b6ed036ad470e1f023
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `localPath`:** The normalized path relative to the caller's Project or installed Plugin Assets root.

**Parameter `sourceFile`:** The compiler-supplied canonical Asset path of the calling source file; callers normally omit it.

## Returns

A mount-qualified path that follows the script from Project development into an installed Plugin.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The caller does not provide a canonical source location produced by the scripting compiler.

**Exception `T:System.ArgumentNullException`:** The local path or source location is null.
