---
title: Recover missing scene scripts
description: Keep logical component and system state intact while a type is temporarily unavailable.
uid: manual.scenes.missing
kind: troubleshooting
owners:
  - Inno.Scene
contracts:
  - project.inno-scene#lifecycle-and-recovery-contract
---
# Recover missing scene scripts

An unavailable component or system type does not mean its serialized state is disposable. The Scene owner uses MissingGameComponent or MissingGameSystem at the original position and persistent identity until the same logical type becomes available again.

## Recognize the state

The placeholder exposes the original `missingType` and diagnostic `missingTypeName`. A Missing system stays disabled. These types are created by restoration and reload, cannot be attached with ordinary AddComponent/AddSystem, and are not game-script facade types.

The retained payload contains stable type identity, neutral property bytes, asset dependencies and scene-reference aliases. It does not retain the old CLR Type, reflection metadata, delegate or script instance. Holding a placeholder alone therefore does not pin the previous script assembly through those objects.

## Diagnose and restore

1. Check compilation, plugin availability and the current type-catalog diagnostics. A matching name is insufficient: recovery needs the original stable type identity.
2. Keep the original scene/prefab and asset metadata. Do not replace the placeholder or unresolved nested assets with defaults just to clear the UI.
3. Let the shared reload transaction activate the candidate and restore every property and current graph reference.
4. Inspect reported restoration/retirement failures. Construction or strict property restoration failure preserves the old Missing state. A post-commit retirement fault cannot be described as a successful rollback.

Other edits can be saved while Missing elements remain. Serialization writes their original logical type and bytes, not a placeholder type or an extra Missing flag. Automatic loss/recovery of a type is not itself a dirty edit or fake History entry. Prefab cloning remaps aliases to the new instance identities before later recovery.

## Keep History usable

Removing or moving a Missing element preserves its original logical state. Undo can restore the placeholder before the script returns; later recovery must not invalidate the meaning of the original redo record. Missing handlers, identity collisions, corrupt state or failed compensation remain explicit failures. See [bounded state capture](../../extending/scene-state.md) for the host contract.

For general reference resolution, distinguish [Unassigned, Missing and Resolved](../references/resolve-missing.md). Type recovery and asset recovery are related but separate: an element can return while a nested asset remains Missing.
