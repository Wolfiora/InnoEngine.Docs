---
title: Diagnose an unavailable plugin
description: Separate invalid installation data, compilation failure, Missing recovery and retirement faults.
uid: manual.plugins.troubleshoot
kind: troubleshooting
owners:
  - Inno.Plugins.Authoring
contracts:
  - project.inno-plugins-authoring#installation-and-generation-contract
---
# Diagnose an unavailable plugin

Start with the current discovery and compilation diagnostics, then compare the installed candidate with the active generation. A package on disk, an extracted cache directory and an active plugin are different states.

## Find the failure boundary

| Symptom | Inspect first | Corrective action |
| --- | --- | --- |
| Package is ignored or rejected | Extension, direct installation location, archive layout | Supply a complete `.iplugin` package, not a folder or renamed binary. |
| Plugin ID is duplicated | Direct and embedded installations | Retain one intended installation per stable ID. |
| Dependency is unavailable | Missing, rejected or cyclic dependency closure | Fix the original dependency; rebuilding its consumers cannot repair it. |
| Asset candidate is rejected | Source paths and `.imeta` metadata | Rebuild valid source metadata and replace the complete package. |
| Code candidate does not compile | Plugin and dependent project script diagnostics | Restore a compatible API or correct the source; do not force activation. |
| Extraction snapshot fails integrity | Exact cached files and reported content identity | Stop dependent readers, retire the corrupt owned cache safely, then rescan the valid installation. |
| Host reports pending retirement or Faulted | Owning transaction and retained resources | Diagnose the real lifetime failure; do not clear state to reopen the gate. |

Never delete cache directories merely because they look old. Active mounts and retained rollback transactions may still read them. Cache recovery requires the owning lifecycle, not an unchecked recursive cleanup.

## Understand a failed update

Ordinary invalid source data can produce an unavailable candidate with diagnostics. If changed plugin availability cannot compile a replacement, the scripting host can publish an unavailable generation at its safe point and retire affected modules. It does not keep unavailable installed code running simply because its previous extraction still exists.

A project-only compilation failure unrelated to plugin availability preserves the active generation. This distinction prevents an ordinary script typo from unnecessarily retiring otherwise valid content.

Scene components and systems whose types disappear retain stable type identity, persistent object identity, serialized state and ordering through Missing representations. Restoring compatible stable IDs in a successful subsequent generation permits recovery. Do not replace these records with new IDs or empty values to make the error disappear.

## Distinguish input errors from lifetime failures

`RetirementPendingException`, even nested in an aggregate or inner exception, is not corrupt user input. The owner must retain the candidate and dependent resources. Subsequent observers or lower-level cleanup must not continue as though activation had simply rejected an archive.

A failed rollback keeps pending Asset ownership until compensation finishes. Repeated `Refresh`, `Dispose` or direct Activate calls cannot bypass the shared generation gate. Keep the original exception tree for diagnosis and replace a terminally faulted host after resolving the cause.

Read [reload diagnostics](../extensions/diagnose-reload.md) for gate states and [plugin host composition](../../extending/plugin-host.md) for safe publication and shutdown.
