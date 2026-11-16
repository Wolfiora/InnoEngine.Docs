---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.81795708715f9bd7fbd6f234d94827c9317ad483acf1bfcbd849b36c83fb47f0
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.IEditorHistoryIsolation.BeginHistoryIsolation
title: IEditorHistoryIsolation.BeginHistoryIsolation
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 08055e870cf81d55e1a0ca35f4153052071703a4a1f4a7b194d2ba05f5e9c5ae
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A lease that releases the temporary branch and restores the retained branch when disposed.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown while another history transition, transaction, or isolated branch is active.
