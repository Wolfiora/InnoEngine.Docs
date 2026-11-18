---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6cb838c569d5d64802ab907fe1170aa7a3e73791ff294c67a7069726485f9ed4
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.Start(Inno.Editor.Core.EditorContext)
title: EditorModule.Start
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: d79245a43d47000b052cd116d8abbd74f77acb0219381892613297400cef4b84
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The shared editor context for the active runtime.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Exception `T:System.InvalidOperationException`:** Thrown when the module is already started.
