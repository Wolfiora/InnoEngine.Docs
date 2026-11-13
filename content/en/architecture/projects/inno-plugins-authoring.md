---
title: Inno.Plugins.Authoring
description: Validated plugin packages, immutable asset mounts and coordinated availability changes.
uid: project.inno-plugins-authoring
kind: project
owners:
  - Inno.Plugins.Authoring
---
# Inno.Plugins.Authoring

This Editor/Build project discovers installed `.iplugin` packages, validates their dependency graph and prepares read-only asset mounts. `PluginEnvironment` coordinates the active plugin catalog, asset candidates and effective settings with the host's shared generation owner. It is outside the Player closure.

Start with [installing a plugin](../../manual/plugins/install.md), [diagnosing an unavailable plugin](../../manual/plugins/troubleshoot.md), or [composing a plugin host](../../extending/plugin-host.md).

## Installation and generation contract

Only direct `.iplugin` packages under the selected installation root become top-level candidates. Folder plugins, renamed `.zip` files and unsupported entries produce discovery diagnostics. Embedded dependencies are complete packages under `Dependencies/` and must be declared by their parent.

Scan validates portable paths, entry counts, expanded sizes, compression ratios, symbolic links, case collisions and required metadata. It rejects prebuilt native/managed binaries. Duplicate IDs, missing dependencies, cycles and their dependent closure do not activate. A successful archive read alone is not a usable candidate.

Validated content is materialized under `Library/Plugins/<pluginId>/<contentHash>`. Published directories are immutable. Reuse checks the exact file set, required directories, sizes and hashes before exposing a mount. Active and pending mounts read their own committed snapshots, so replacing an installation does not invalidate an in-flight read or compensation. This does not authorize retaining a removed plugin as active indefinitely.

The host initializes Assets from the same initial scan used to construct `PluginEnvironment`. Updates and publication run on the Asset owner thread at a safe point. The watcher records/coalesces changes; owned background reconciliation does not publish runtime state. Code changes wait for the scripting generation; non-code availability changes use the same generation gate.

`CreateReloadChange` composes a real `ReferenceRecoveryTransaction` with a structural plugin/settings participant. Low-level Activate/Commit/Rollback methods belong to that protocol, not an alternative immediate-install API. Settings and plugin IDs do not need fabricated object-reference slots.

Ordinary invalid installation data becomes isolated diagnostics and an appropriate unavailable candidate. Pending retirement is never an input error: propagate direct or nested signals, retain the pending transaction and stop dependent teardown. Rollback clears pending ownership only after Assets, catalog and settings compensation finishes. Dispose cannot skip a retained candidate; it drains owned work before releasing the watcher and catalog, and does not delete installed sources or caches.

## Availability and API surfaces

Scan results and active lists are frozen. Candidate manifests are deep copies. A discovered candidate is not necessarily active; `compilationPlugins` and `compilationAssets` may describe the unpublished generation.

These pages document the actual CLR host surface. A scripting namespace annotation alone does not export every authoring member; use the selected script manifest before assuming availability in a script.

## API reference

Browse [source validation, candidates and environment members](../../api/engine/plugins/authoring/index.md). A compiled host example does not certify archive mutation, cancellation or collectible-unload behavior.
