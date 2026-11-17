---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9aea19850b67a6c25512413aceaea327867ed1636f0a75859323b643f93e33b8
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeToolchainSelection.WithTools(System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IEnumerable{System.String})
title: NativeToolchainSelection.WithTools
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: d007d656acdeae8c77366d447470649e42ce4b90ef5a847cef88b560d555542b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `tools`:** Explicit absolute executables required by the selected backend integration.

**Parameter `inputs`:** Integration implementation and configuration files participating in tool selection.

## Returns

A new immutable selection containing both the platform and integration inputs.

## Exceptions

**Exception `T:System.ArgumentException`:** A contribution conflicts with an already selected command.

**Exception `T:System.IO.FileNotFoundException`:** A contributed tool or input does not exist.
