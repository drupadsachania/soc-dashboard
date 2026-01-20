import React, { ReactNode } from 'react';

interface OSShellProps {
    topBar: ReactNode;
    navRail: ReactNode;
    children: ReactNode;
    rightRail?: ReactNode;
    actionGate?: ReactNode;
}

/**
 * OSShell: The structurally invariant container for VANGUARD OS.
 * strictly follows the 5-segment layout defined in the design contract.
 */
export const OSShell: React.FC<OSShellProps> = ({
    topBar,
    navRail,
    children,
    rightRail,
    actionGate,
}) => {
    return (
        <div className="flex flex-col h-screen w-screen bg-vanguard-obsidian text-foreground overflow-hidden">
            {/* 1. Global Top Bar */}
            <div className="h-12 border-b border-vanguard-border shrink-0 z-50">
                {topBar}
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* 2. Left Rail (Navigation) */}
                <div className="w-16 border-r border-vanguard-border shrink-0 z-40 bg-vanguard-obsidian">
                    {navRail}
                </div>

                {/* 3. Main Canvas (Primary Task) */}
                <main className="flex-1 min-w-0 relative overflow-hidden flex flex-col">
                    <div className="flex-1 overflow-auto">
                        {children}
                    </div>

                    {/* 5. Action Gate (Action / System Status Bar) */}
                    {actionGate && (
                        <div className="h-16 border-t border-vanguard-border shrink-0 z-30 bg-vanguard-surface/80 backdrop-blur-md">
                            {actionGate}
                        </div>
                    )}
                </main>

                {/* 4. Right Rail (Context/Intelligence) */}
                {rightRail && (
                    <div className="w-80 border-l border-vanguard-border shrink-0 z-40 bg-vanguard-obsidian overflow-y-auto">
                        {rightRail}
                    </div>
                )}
            </div>
        </div>
    );
};
