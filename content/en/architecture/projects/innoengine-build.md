---
# Generated metadata. Maintained by project synchronization and review tooling.
uid: project.innoengine-build
symbol: project:InnoEngine.Build
title: InnoEngine.Build
kind: project
owners:
- InnoEngine.Build
reviewed: ''
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: InnoEngine contributors
description:
- The ordinary SDK executable for build, validation and documentation commands.
outdated: false
---
# InnoEngine.Build

The ordinary SDK executable for build, validation and documentation commands.

Use the task linked below before inspecting this implementation entry.

## Start with the workflow

[Build and run development entries](../../contributing/development-entries.md), [validate a change](../../contributing/validate-change.md), or [query a prepared documentation snapshot](../../contributing/documentation-queries.md). Commands and their product/environment obligations are distinct; starting the CLI alone is not acceptance.

## Direct composition

This .NET executable calls BuildApplication.Run through a normal project reference. Program adds the selected development target and appropriate configuration defaults only to the commands that need them. An empty invocation selects support; game publication still uses explicit caller targets. It does not prepare and reflectively load another CLI assembly at startup.

The entry owns its CancellationTokenSource and Ctrl+C subscription, removes the handler on exit, and maps cancellation/unhandled failure to nonzero exit codes. It holds support-artifact reading protection until consumers finish. The CLI and standard distribution own actual command implementation.

## Output boundary

Product clean takes exclusive ownership of the selected product/configuration and cannot remove an active Editor deployment. Registered cache cleanup preserves dependencies and readers; unregistered directories are not silently adopted. Windows embeds the existing separately licensed branding icon.

The captured entry has no public/protected CLR API. Callers needing managed command composition use the owning tooling/CLI libraries, not Program reflection.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/entry/InnoEngine.Build/InnoEngine.Build.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.
