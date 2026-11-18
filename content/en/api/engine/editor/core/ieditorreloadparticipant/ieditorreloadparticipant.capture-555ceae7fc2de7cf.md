---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.555ceae7fc2de7cf73f3d2a9016bbf5c7ba86648cd93b1c79059a30a3f1a297d
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.IEditorReloadParticipant.Capture(Inno.Extensibility.Modules.AssemblyReloadContext)
title: IEditorReloadParticipant.Capture
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: 08c6b7a33ad295d95460711bed7a03b62a74d33a97b340d77054150bf23a71a5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The prepared assembly reload context containing previous and candidate participant state.

## Returns

A transaction that has captured current state but has not modified live editor objects.
