---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.555ceae7fc2de7cf73f3d2a9016bbf5c7ba86648cd93b1c79059a30a3f1a297d
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.IEditorReloadParticipant.Capture(Inno.Extensibility.Modules.AssemblyReloadContext)
title: IEditorReloadParticipant.Capture
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: c226cd585dd6395a48ae8443972c174acbc7cbe32b130b8f5b397250a9563e79
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
