---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b86b0c063d6e551ff9d16d03695fd81ebc11e7939470afca17ddae3fd3463f2e
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.BeginHistoryIsolation
title: EditorInteractions.BeginHistoryIsolation
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 415132eb992ec80070f4e4ba80d9be110e837e77da0569222081d234cebd5f1f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Disposing the returned scope releases every temporary operation and restores the retained branch. This host-level boundary is intended for transient editor sessions such as Play Mode.

## Returns

A scope that restores the retained history branch when disposed.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown during an Undo, Redo, transaction, or another isolated branch.
