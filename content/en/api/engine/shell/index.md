---
uid: api.directory.engine.shell
title: "Shell"
kind: landing
owners: []
---

# Shell

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [IShellFrameDriver](ishellframedriver/index.md) | Gives a host ownership of frame scheduling while the shell owns frame execution and retirement. |
| [PollingShellFrameDriver](pollingshellframedriver/index.md) | Runs an application-owned frame loop synchronously on its calling thread. |
| [ScheduledShellFrameDriver](scheduledshellframedriver/index.md) | Runs frames when an external host grants a nonblocking presentation opportunity. |
| [Shell](shell/index.md) | Owns the backend-neutral window, event pump, input source, rendering device, and host frame lifecycle. |
| [ShellFrame](shellframe/index.md) | Captures immutable timing and identity for one composition-shell frame. |
| [ShellOptions](shelloptions/index.md) | Configures backend selection and primary-window policy for a composition shell. |
| [ShellState](shellstate/index.md) | Describes the observable lifetime of one owner-thread composition shell. |

