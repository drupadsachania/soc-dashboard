export type VanguardView =
    | 'DASHBOARD'
    | 'ALERTS'
    | 'INVESTIGATION'
    | 'MAP'
    | 'LOGIC'
    | 'DATA'
    | 'AUDIT'
    | 'CONFIG';

export interface ViewState {
    activeView: VanguardView;
    params?: Record<string, any>;
}
