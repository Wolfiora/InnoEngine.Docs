---
title: Install and update a plugin
description: Add a complete source package and distinguish discovery from active publication.
uid: manual.plugins.install
kind: how-to
owners:
  - Inno.Plugins.Authoring
contracts:
  - project.inno-plugins-authoring#installation-and-generation-contract
---
# Install and update a plugin

Install plugins as complete `.iplugin` files in the project's selected `Plugins` directory. The Editor/Build host validates their contents and dependencies before making assets, settings and code available. This workflow assumes a host composed with `PluginEnvironment`; a standalone Player does not become a plugin installer.

## Before you begin

Use a package built for the intended engine contracts. Install its required dependencies, or include them as validated embedded packages. Avoid installing the same plugin ID both directly and through an embedded dependency: duplicate identity is a diagnostic, not a version-selection mechanism.

Keep the project source and installed packages under your own appropriate backup/version-control policy. `Library/Plugins` contains rebuildable extraction snapshots, not the authoritative package source.

## Install the complete package

1. Place the `.iplugin` file directly under the installation directory. A folder or a file still named `.zip` is not an installed plugin.
2. Allow the host's update loop to process discovery. Watcher events are coalesced; a filesystem notification is not immediate activation.
3. Inspect current plugin discovery diagnostics. Archive, metadata, duplicate ID and dependency errors keep affected candidates unavailable.
4. For code changes, wait for compilation and generation publication at the host's frame-safe point. A candidate visible to compilation is not yet the active plugin generation.
5. Confirm that the plugin appears in the active catalog and that its required content/settings or extensions are available.

These steps describe the underlying supported workflow; they do not imply a package-manager UI or online marketplace exists.

## Update or remove a package

Replace the whole installed file rather than editing a mounted extraction directory. Prepare the replacement outside the scanned directory and publish a complete package using your installation tool's safe replacement operation. Do not expose a partially written archive as the new installation.

The host materializes content-addressed snapshots and mounts them read-only. Existing reads and rollback use their captured snapshot even if the installation is replaced or removed. New availability still follows the current validated installation; retaining old files for compensation does not keep a deleted plugin logically installed.

Deleting a package or supplying an unusable update can retire its code and affected dependent modules. Scene state becomes Missing where types are unavailable. Preserve saved IDs and payloads so a compatible valid generation can restore them.

## Check the result

`discovery` describes validation results; `activePlugins` describes the published generation. Host authors can inspect `hasPendingActivation`, `compilationPlugins` and `compilationAssets` to distinguish a staged candidate. Do not call low-level activation methods from an installation watcher.

If a package does not activate, use [plugin troubleshooting](troubleshoot.md). If you are creating the package, read [the exact container requirements](../../extending/plugin-packages.md).
