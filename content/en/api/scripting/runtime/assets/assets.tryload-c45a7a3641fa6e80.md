---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c45a7a3641fa6e80ca54ff3161b6c8faf9d9a96631fd1f9ca3c1c08ebc59e9f5
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.Assets.TryLoad``1(InnoEngine.Assets.AssetPath,``0@)
title: Assets.TryLoad
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
sourceFingerprint: 4eb8ae073c285c910a046fe906be0183b25cc3b39893ec8d28b7ea16ce54b1d1
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** The required asset contract.

## Parameters

**Parameter `path`:** The mount-qualified logical catalog path.

**Parameter `asset`:** Receives the canonical compatible asset when available.

## Returns

`true` when the current lookup contains a compatible asset; otherwise, `false`.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no asset lookup is active for the caller.
