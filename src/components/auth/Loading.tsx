
import { Skeleton, } from "antd";
import "./index.less";

export default function Loading() {
    return (
        <div className="sk-load">
            <aside>
                <div className="sk-load-logo">
                    <span /><span />
                </div>
                <div className="sk-side-list">
                    <ul>
                        <li ><i /><span /></li>
                        <li ><i /><span /></li>
                        <li ><i /><span /></li>
                        <li ><i /><span /></li>
                        <li ><i /><span /></li>
                        <li ><i /><span /></li>
                    </ul>
                </div>
            </aside>
            <section className="sk-main">
                <header>
                    <label />
                    <span />
                </header>
                <main>
                    <section className="sk-main-bg">
                        <div className="sk-main-item"><Skeleton avatar active/></div>
                        <div className="sk-main-item"><Skeleton avatar active /></div>
                    </section>
                </main>
            </section>
        </div>
    )
}
