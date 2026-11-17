---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.233633214a0d7dbf0e77e784e5d7830efb62e0dadcecca66df203417e72039f8
symbol: engine:Inno.Editor.Diagnostics:M:Inno.Editor.Diagnostics.EditorConsole.#ctor(Inno.Core.Logging.LogRouter,Inno.Core.Diagnostics.DiagnosticHub,Inno.Editor.PlayMode.IEditorPlayMode)
title: EditorConsole.Constructor
kind: api
owners:
- Inno.Editor.Diagnostics
apiSurface: source-clr
reviewed: 6ec2996f8b2529ebbf426f2b4e382e9cae50033851fc2cc2db465a72810e7808
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `logRouter`:** The host logging router whose entries are presented by this Console.

**Parameter `diagnosticHub`:** The host diagnostic hub whose current reports are presented by this Console.

**Parameter `playMode`:** The Play Mode source used to clear ordinary logs when a new simulation request begins.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `playMode` is `null`.
