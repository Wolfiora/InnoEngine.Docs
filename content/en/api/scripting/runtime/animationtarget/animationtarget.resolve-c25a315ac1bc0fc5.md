---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c25a315ac1bc0fc5acf8f1b44b480ac9c6965533937825705d7c5f2b7fe6b5bc
symbol: scripting:Inno.Animation:M:InnoEngine.Animation.AnimationTarget.Resolve``1
title: AnimationTarget.Resolve
kind: api
owners:
- Inno.Animation
apiSurface: editor-script
reviewed: 9888fcb19f1f996b63b337a144bdc253ffd6a9e3179342d0e02b63b79eed383a
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Resolves the original runtime slot without binding to a replacement generation.

## Type parameters

**Type parameter `TObject`:** The expected destination contract.

## Returns

The live destination, or null for a missing, retired, or incompatible target.
