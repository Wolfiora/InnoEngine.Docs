---
# Identity metadata. Set once; other pages reference uid through contracts.
uid: manual.execution.session-coroutines
kind: how-to

# Relation metadata. Name actual engine projects and page identities; validation rejects unknown values.
owners: [Inno.Runtime, Inno.Core.Coroutines, Inno.Scene]
contracts: [project.inno-core-coroutines#execution-and-release-contract]
exampleMode: runtime-script
exampleProjects: [Inno.Runtime, Inno.Core.Coroutines, Inno.Scene]

# Authoring metadata. Edit these fields and the text below.
title: Run a coroutine in the current game session
description: Wait for dialogue to finish, cancel a routine and release its resources when its session or plugin retires.
---
# Run a coroutine in the current game session

Use `SessionCoroutines.Start(owner, routine)` when a game script needs to do something now and continue on a later frame. Call it from a callback running in the intended session, such as a game behavior's `Start`. The session advances the routine during its own ticks. Give it a fresh enumerator and the object responsible for stopping it.

## Show choices after a line of dialogue

Attach this behavior to a game object. Have the dialogue player's completion callback call `FinishLine()` on that instance on the session thread. The choices become available on the first coroutine tick that sees the line has finished. Disabling the behavior while it waits leaves the choices hidden.

```csharp
using System.Collections;
using InnoEngine.Core;
using InnoEngine.Coroutines;
using InnoEngine.Reflection;
using InnoEngine.Scene;

[StableTypeID("bbf1fa34-d666-492d-b5fc-7ca7e034aaba")]
public sealed class DialogueChoices : GameBehavior
{
    private CoroutineHandle m_routine;
    private bool m_lineFinished;

    public bool choicesVisible { get; private set; }
    public bool waitingForLine { get; private set; }

    protected override void Start()
    {
        m_routine = SessionCoroutines.Start(this, RevealChoices());
    }

    public void FinishLine() => m_lineFinished = true;

    protected override void OnDisable()
    {
        if (m_routine.isValid)
        {
            SessionCoroutines.StopAll(this);
        }
    }

    private IEnumerator RevealChoices()
    {
        waitingForLine = true;
        try
        {
            yield return new WaitUntil(() => m_lineFinished);
            choicesVisible = true;
        }
        finally
        {
            waitingForLine = false;
        }
    }
}
```

Starting queues the routine. The body first runs when the scheduler processes its start. `WaitUntil` polls on subsequent ticks. The owner is matched by reference identity, so starting with `this` and stopping with `this` addresses the same behavior. The example explicitly ends its work in `OnDisable`; apply the same policy to a scene feature whose work should end when that feature exits.

## Choose when to stop

- **One routine.** Keep the returned `CoroutineHandle` and call `SessionCoroutines.Stop(handle)` in the same session. A true result means the stop was queued. A completed, invalid or other-session handle returns false. Let the scheduler dispose the enumerator.
- **One owner.** Call `SessionCoroutines.StopAll(owner)` to retire that object's routines in the current session. An owner stop issued from its own running callback invalidates the handle immediately. The callback must return before its executing enumerator can be disposed.
- **Session exit or plugin replacement.** Session shutdown retires admitted routines while scene and session services are still available for cleanup. On successful code replacement the session retires routines whose owner, executing enumerator or wait belongs to the retiring code. A rejected candidate leaves the current generation running. Other sessions have their own schedulers.

Use `finally` or an iterator-local `using` to release subscriptions and other resources acquired inside a routine. Nested enumerators are disposed child first. If the iterator never started, its body and its `finally` block were never entered. Execution, wait and cleanup failures are aggregated after eligible cleanup. An unbound thread cannot use the session facade. Deliver background results to the session thread before starting or stopping session work, and finish cleanup without starting more work during retirement.

## Give a plugin its own wait condition

A custom `YieldInstruction` creates one predicate for each suspension. For example, a controller can require two consecutive neutral readings before accepting another press. Keep the count inside `CreateWaiter` so two routines can yield the same instruction and count independently.

```csharp
using System;
using InnoEngine.Coroutines;

public sealed class WaitForNeutralInput(Func<bool> isNeutral) : YieldInstruction
{
    protected override Func<double, ulong, bool> CreateWaiter()
    {
        int consecutive = 0;
        return (_, _) =>
        {
            consecutive = isNeutral() ? consecutive + 1 : 0;
            return consecutive < 2;
        };
    }
}
```

Yield an instance with a callback that reads your controller's current state. The scheduler starts polling on the next tick and passes elapsed scheduler seconds and frames since this suspension. Returning true keeps waiting. Returning false resumes the iterator. A stop releases the predicate without one last poll, so put resource cleanup in the iterator.

See the script references for [SessionCoroutines](../../api/scripting/runtime/sessioncoroutines/index.md) and [YieldInstruction.CreateWaiter](../../api/scripting/runtime/yieldinstruction/yieldinstruction.createwaiter-f631555e476b08f2.md). For the built-in wait choices and a separately owned host loop, see [Run and stop frame-driven coroutines](run-coroutines.md).
